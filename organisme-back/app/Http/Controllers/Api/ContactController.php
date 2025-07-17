<?php

namespace App\Http\Controllers\Api;

use App\Models\Contact;
use App\Http\Controllers\Controller;
use App\Notifications\ContactNotification;
use Illuminate\Support\Facades\Notification;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
           'phone' => [
        'required',
        'string',
        
    ],
            'message' => ['required', 'string', 'max:1000'],
        ]);

     
        $contact = Contact::create($validated);

        if ($contact) {
             Notification::route('mail', 'melmecaniqui@gmail.com')
        ->notify(new ContactNotification($contact));
            return response()->json([
                'message' => 'Message envoyé avec succès !',
                'data' => $contact
            ], 201);
        } else {
            return response()->json([
                'error' => 'Erreur lors de l\'enregistrement'
            ], 500);
        }
    }
}
