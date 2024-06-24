import cv2
import pickle

# استخدم الفواصل المزدوجة
img_path = 'C:\\Users\\DELL\\Desktop\\LoparkGrad\\graduation-project\\back\\python\\Photos\\img111.PNG'

width, height = 140, 24

try:
    with open('CarParkPos', 'rb') as f:  # rb is read binary
        posList = pickle.load(f)
except:
    posList = []  # all spaces

def mouseClick(events, x, y, flags, params):
    if events == cv2.EVENT_LBUTTONDOWN:  # create pos
        posList.append((x, y))

    if events == cv2.EVENT_RBUTTONDOWN:
        for i, pos in enumerate(posList):
            x1, y1 = pos
            if x1 < x < x1 + width and y1 < y < y1 + height:
                posList.pop(i)

    with open('CarParkPos', 'wb') as f:  # wb is write binary
        pickle.dump(posList, f)

while True:
    img = cv2.imread(img_path)

    if img is None:
        print(f"Error: Unable to load image at {img_path}")
        break

    # تغيير حجم الصورة إلى 500×800 بيكسل
    img_resized = cv2.resize(img, (900, 400))

    for pos in posList:
        cv2.rectangle(img_resized, pos, (pos[0] + width, pos[1] + height), (255, 0, 255), 1)  # img, start, end, color, thickness

    cv2.imshow("image", img_resized)
    cv2.setMouseCallback("image", mouseClick)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cv2.destroyAllWindows()
