<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Nouveau message de contact</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f6f6f6;
            padding: 20px;
        }
        .email-container {
            background-color: #ffffff;
            border-radius: 5px;
            padding: 30px;
            max-width: 600px;
            margin: auto;
            box-shadow: 0 0 10px rgba(0,0,0,0.05);
        }
        h2 {
            color: #4a8b3b;
        }
        p {
            font-size: 15px;
            color: #333333;
        }
        .label {
            font-weight: bold;
            color: #e84c93;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <h2>📩 Nouveau message reçu</h2>

        <p><span class="label">Nom :</span> {{ $data['name'] }}</p>
        <p><span class="label">Email :</span> {{ $data['email'] }}</p>
        <p><span class="label">Téléphone :</span> {{ $data['phone'] }}</p>

        <hr>

        <p><span class="label">Message :</span></p>
        <p>{{ $data['message'] }}</p>
    </div>
</body>
</html>
