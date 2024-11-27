from flask import Flask, jsonify
from flask_cors import CORS
import cv2
import numpy as np
import time
import cvzone
from pose_module import PoseDetector
import cv2
import matplotlib.pyplot as plt
from ultralytics import YOLO


app = Flask(__name__)
CORS(app)

def count_pushups():
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        return {"error": "Could not access the camera. Please ensure it is connected."}

    detector = PoseDetector()
    direction = 0
    push_ups = 0
    ready = False  # Check if the user is ready
    max_pushups = 0

    try:
        while True:
            success, img = cap.read()
            if not success:
                break

            img = detector.findPose(img)
            lmlist, bbox = detector.findPosition(img, draw=False)

            if lmlist:
                # Calculate angles
                a1, _ = detector.findAngle(lmlist[12][:2], lmlist[14][:2], lmlist[16][:2], img=img)
                a2, _ = detector.findAngle(lmlist[15][:2], lmlist[13][:2], lmlist[11][:2], img=img)

                # Check readiness
                if not ready and 160 <= a1 <= 170 and 160 <= a2 <= 170:
                    ready = True
                    cvzone.putTextRect(img, "Ready! Start Push-ups", (200, 50), 2, 2, colorT=(0, 255, 0), colorR=(255, 255, 255), border=1)
                elif not ready:
                    cvzone.putTextRect(img, "Get into position", (200, 50), 2, 2, colorT=(0, 0, 255), colorR=(255, 255, 255), border=1)

                if ready:
                    # Calculate percentages and draw bars
                    per_val1 = int(np.interp(a1, (90, 170), (100, 0)))
                    per_val2 = int(np.interp(a2, (90, 170), (100, 0)))

                    if per_val1 == 100 and per_val2 == 100 and direction == 0:
                        push_ups += 0.5
                        direction = 1
                    elif per_val1 == 0 and per_val2 == 0 and direction == 1:
                        push_ups += 0.5
                        direction = 0

                    max_pushups = max(max_pushups, int(push_ups))

            cv2.imshow("Push-ups Counter", img)
            if cv2.waitKey(1) == ord("q"):
                break
    finally:
        cap.release()
        cv2.destroyAllWindows()

    return {"max_pushups": max_pushups}

def food_detection():
    # Load your YOLO model
    model = YOLO(r"C:\Users\DELL\Desktop\Desktop stuff\Development\PoseClassification\Website-build\food-recognition-pose-estimation\backend\best.pt")

    import cv2

    def detect_food_items_from_frame(frame, class_thresholds=None):
        """
        Detects food items in the given video frame using the YOLO model and returns a dictionary
        with food item names and their respective quantities.

        Args:
            frame (numpy.ndarray): The frame captured from the camera.
            class_thresholds (dict, optional): A dictionary with food item names as keys and their
                                            respective confidence thresholds as values. If None,
                                            a default threshold of 0.5 is used for all classes.

        Returns:
            dict: A dictionary with food item names as keys and their counts as values.
            numpy.ndarray: The frame with filtered bounding boxes drawn.
        """
        if class_thresholds is None:
            class_thresholds = {"bread": 0.5, "apple": 0.8}  # Default thresholds for known classes

        results = model(frame)  # Perform detection on the frame
        detected_items = {}

        # Copy the frame to draw filtered bounding boxes
        annotated_frame = frame.copy()

        for result in results:
            for box in result.boxes:
                class_id = box.cls.item()
                class_name = result.names[class_id]
                confidence = box.conf.item()

                # Get the specific threshold for the class or default to 0.5
                threshold = class_thresholds.get(class_name, 0.5)

                if confidence >= threshold:  # Apply the class-specific confidence threshold
                    # Update the count of detected food items
                    if class_name in detected_items:
                        detected_items[class_name] += 1
                    else:
                        detected_items[class_name] = 1

                    # Draw the bounding box on the frame
                    x1, y1, x2, y2 = map(int, box.xyxy[0].tolist())
                    cv2.rectangle(annotated_frame, (x1, y1), (x2, y2), (0, 255, 0), 2)
                    cv2.putText(
                        annotated_frame,
                        f"{class_name} {confidence:.2f}",
                        (x1, y1 - 10),
                        cv2.FONT_HERSHEY_SIMPLEX,
                        0.5,
                        (0, 255, 0),
                        2,
                    )

        return detected_items, annotated_frame



    def run_camera_detection():
        """
        Captures video from the camera and performs real-time food detection.
        """
        cap = cv2.VideoCapture(0)  # Open the default camera (0 = primary camera)
        
        if not cap.isOpened():
            print("Error: Could not open camera.")
            return

        all_food_items = {}

        def update_food_items(all_food_items, detected_items):
            for item, count in detected_items.items():
                if item in all_food_items:
                    all_food_items[item] = max(all_food_items[item], count)
                else:
                    all_food_items[item] = count

        while True:
            ret, frame = cap.read()  # Capture frame-by-frame
            if not ret:
                print("Failed to grab frame")
                break

            # Detect food items in the frame with confidence threshold of 0.25
            food_items, annotated_frame = detect_food_items_from_frame(frame)

            # Display the annotated frame with bounding boxes
            cv2.imshow('Food Detection', annotated_frame)

            update_food_items(all_food_items, food_items)

            # Print detected food items on the console
            print(f"Detected food items: {food_items}")
            print(f"All food items so far: {all_food_items}")

            # Break loop on 'q' key press
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

        # Release the camera and close any open windows
        cap.release()
        cv2.destroyAllWindows()
        return all_food_items

    # Run the camera detection
    return run_camera_detection()


@app.route("/api/data/pushups", methods=["GET"])
def api_data_get_pushup():
    result = count_pushups()
    return jsonify(result)

@app.route("/api/data/food-detection", methods=["GET"])
def api_data_get_food_data():
    result = food_detection()
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
