<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;  // Allow all users to make the request
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        if (request()->isMethod('post')) {
            return [
                'name' => 'required|string|max:258',
                'email' => 'required|string|email',
                'phone' => 'required|string'
            ];
        } else {
            return [
                'name' => 'required|string|max:258',
                'email' => 'required|string|email',
                'phone' => 'required|string'
            ];
        }
    }
}