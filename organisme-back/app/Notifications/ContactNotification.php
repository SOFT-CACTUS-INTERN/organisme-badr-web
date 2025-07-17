<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;

class ContactNotification extends Notification
{
    use Queueable;

    protected $contact;

    public function __construct($contact)
    {
        $this->contact = $contact;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    // public function toMail($notifiable)
    // {
    //     return (new MailMessage)
    //      ->from($this->contact['email'], $this->contact['name']) 
    //         ->replyTo($this->contact['email'], $this->contact['name']) 
    //                 ->subject('Nouveau message de contact')
    //                 ->greeting('Bonjour,')
    //                 ->line('Tu as reçu un nouveau message de : ' . $this->contact->name)
    //                 ->line('Email : ' . $this->contact->email)
    //                 ->line('Téléphone : ' . $this->contact->phone)
    //                 ->line('Message : ' . $this->contact->message)
    //                 ->line('Merci.');
    // }
     public function toMail($notifiable)
    {
        return (new MailMessage)
           
            
            ->subject('Nouveau message de contact')
            ->view('contact', [
                'data' => $this->contact
            ]);
    }
}
