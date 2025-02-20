<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insert Data</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <h4 class="text-xl font-semibold mb-4 text-center">Insert Data</h4>
        <hr class="mb-4">
        <form action="{{route('editStore')}}" method="post" class="space-y-4"> 
            @csrf
            <div>
                <label class="block text-gray-700">Name</label>
                <input type="text" value="{{$Data->id}}" name="curd_id" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
                <label class="block text-gray-700">Name</label>
                <input type="text" value="{{$Data->name}}" name="name" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
                <label class="block text-gray-700">Email</label>
                <input type="text" value="{{$Data->email}}" name="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
                <label class="block text-gray-700">Phone</label>
                <input type="text"value="{{$Data->phone}}" name="phone" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
                <input type="submit" value="Submit" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
            </div>
        </form>
    </div>
</body>
</html>
