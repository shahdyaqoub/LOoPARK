import cv2

# استخدم المسار المطلق للصورة مباشرة
img_path = r'C:\Users\DELL\Desktop\LoparkGrad\graduation-project\Photos\img2.jpeg'

img = cv2.imread(img_path)

if img is None:
    print(f"Error: Unable to load image at {img_path}")
else:
    cv2.imshow("Test Image", img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
