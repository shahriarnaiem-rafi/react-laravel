<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Showing</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 p-6">
    <section class="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">View Data</h3>
        <hr class="mb-4">

        <a href="{{route('create')}}" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Insert Data <i class="fa-solid fa-plus"></i>
        </a>

        <div class="overflow-x-auto mt-4">
            <table class="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead class="bg-gray-200 text-gray-700">
                    <tr>
                        <th class="px-4 py-2 border">Id</th>
                        <th class="px-4 py-2 border">Name</th>
                        <th class="px-4 py-2 border">Email</th>
                        <th class="px-4 py-2 border">Phone</th>
                        <th class="px-4 py-2 border">Created At</th>
                        <th class="px-4 py-2 border">Updated At</th>
                        <th class="px-4 py-2 border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($viewData as $Data)
                    <tr class="text-gray-700 hover:bg-gray-100 transition">
                        <td class="px-4 py-2 border text-center">{{$Data->id}}</td>
                        <td class="px-4 py-2 border">{{$Data->name}}</td>
                        <td class="px-4 py-2 border">{{$Data->email}}</td>
                        <td class="px-4 py-2 border">{{$Data->phone}}</td>
                        <td class="px-4 py-2 border">{{$Data->created_at}}</td>
                        <td class="px-4 py-2 border">{{$Data->updated_at}}</td>
                        <td class="px-4 py-2 border">
                        <a href="{{route('update', $Data->id)}}">Edit</a>
                            <form action="{{route('delete',$Data->id)}}" method="post">
                                @csrf
                                @method('DELETE')
                                <button class="btn btn-gost btn-sm" type="submit">Delete</button>
                            </form>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </section>
</body>

</html>