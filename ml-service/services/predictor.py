from tensorflow.keras.models import load_model
import numpy as np
from utils.image_preprocessing import preprocess_image

# ── Load models once at startup ──
acne_model = load_model("model/acne_model.keras")
skin_model = load_model("model/skin_model.keras")

# ── Class labels ──
# Keras sorts alphabetically:
# skin:  dry=0, normal=1, oily=2
# acne:  Acne=0, Non_Acne=1
skin_classes = ['dry', 'normal', 'oily']
acne_classes = ['Acne', 'Non_Acne']

# ── Skincare tips ──
TIPS_MAP = {
    "DRY": [
        "Use a cream-based or hydrating cleanser",
        "Apply a rich moisturizer with hyaluronic acid and ceramides",
        "Avoid hot water — use lukewarm water to wash face",
        "Use a hydrating toner with glycerin or aloe vera",
    ],
    "OILY": [
        "Use a gentle foaming or gel-based cleanser twice daily",
        "Apply oil-free, non-comedogenic moisturizer",
        "Use niacinamide serum to control sebum production",
        "Use a clay mask once a week",
    ],
    "NORMAL": [
        "Maintain routine with a mild cleanser and light moisturizer",
        "Use Vitamin C serum in the morning for glow",
        "Apply broad-spectrum SPF 30+ daily",
    ],
}

ACNE_TIPS = [
    "Use a salicylic acid or benzoyl peroxide cleanser",
    "Avoid touching your face frequently",
    "Use non-comedogenic, oil-free products only",
    "Consider a retinol or adapalene treatment at night",
]


def predict_image(image_bytes):
    img = preprocess_image(image_bytes)

    # ── Skin type prediction ──
    skin_pred   = skin_model.predict(img, verbose=0)
    skin_index  = int(np.argmax(skin_pred))
    skin_result = skin_classes[skin_index].upper()

    # ── Acne prediction ──
    acne_pred  = acne_model.predict(img, verbose=0)
    acne_index = int(np.argmax(acne_pred))
    has_acne   = acne_classes[acne_index] == 'Acne'

    # ── Build clean response ──
    result = {
        "skinType" : skin_result,
        "concern"  : "ACNE" if has_acne else "NONE",
        "tips"     : TIPS_MAP.get(skin_result, TIPS_MAP["NORMAL"]),
    }

    if has_acne:
        result["acneTips"] = ACNE_TIPS

    return result