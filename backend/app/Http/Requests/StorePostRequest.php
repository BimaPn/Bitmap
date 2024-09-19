<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize()
    {
        return true;
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */


    public function rules()
    {
        return [
            'title' => 'required|string|min:2|max:255',
            'description' => 'nullable|string|min:4|max:255',
            "media" => "required|image|mimes:jpeg,png,jpg,webp|max:10048",
            'category_id' => 'required|exists:categories,id',
        ];
    }
}
