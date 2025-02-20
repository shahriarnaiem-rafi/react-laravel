<?php

namespace App\Http\Controllers;

use App\Models\CardModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class CurdController extends Controller
{
   public function vieww(){
    $viewData=CardModel::all();
      // return $viewData;

      return response()->json([
         'results' => $viewData
         ],200);
   //  return view('view',compact('viewData'));
   }
   public function posted(Request $request){
      CardModel::create($request->only([
         'name',
         'email',
         'phone'
      ]));
   }
  


   // public function deleteData($curd_id){
   //  $viewData=CardModel::find($curd_id);
   //  $viewData->delete();
   //  return Redirect::to('view');

   // }
   public function deleteData($curd_id){
    $viewData=CardModel::find($curd_id);
    if(!$viewData){
      return response()->json([
         'message'=> 'user not found'
      ],400);
    }
    $viewData->delete();
    return response()->json([
        'message'=> 'user delele '
    ],200);

   }
   public function inserted2(){
    return view('/inserted');
   }
   // public function posted(Request $req){
   //  $Data=new CardModel;
   //  $Data->name=$req->name;
   //  $Data->email=$req->email;
   //  $Data->phone=$req->phone;
   //  $Data->save();
   //  return Redirect::to('/view');

   // }
   public function update($curd_id){
      $Data=CardModel::find($curd_id);
      return view('/edit',compact('Data'));
     }
     public function editStore(Request $req){
      $Data= CardModel::find($req->curd_id);
      $Data->name=$req->name;
      $Data->email=$req->email;
      $Data->phone=$req->phone;
      $Data->save();
      return Redirect::to('/view');
  
     }
}
