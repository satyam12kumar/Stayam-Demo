import pandas as pd
import qrcode
import os
import json

# Load student data
df = pd.read_excel("students.xlsx")

# Create output folder
output_folder = "qr_codes"
os.makedirs(output_folder, exist_ok=True)

for index, row in df.iterrows():
    data = {
        "roll": str(row["Roll No"]),
        "name": row["Name"],
        "class": row["Class"],
        "semester": str(row["Semester"])
    }

    # Convert to JSON string
    qr_text = json.dumps(data)

    # Generate QR
    img = qrcode.make(qr_text)

    # Save with filename as roll number
    filename = os.path.join(output_folder, f"{row['Roll No']}.png")
    img.save(filename)

    print(f"✅ QR code saved: {filename}")
