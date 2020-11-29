<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    function addPost(Request $request){
        try{
            $recived = auth()->userOrFail();
        }catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e){
            error_log($e);
            return response()->json(['error' => $e->getMessage()], 401);
        }
        try{
            $lastPost = Post::orderBy('id', 'desc')->first();
            if($lastPost != null){
                $idCount = $lastPost->id;
                $idCount++;
                error_log($idCount);
                $imageName = $request->image->getClientOriginalName(). "_".$idCount . '.jpg';
                
            }
            else
                $imageName = $request->image->getClientOriginalName(). "_0". '.jpg';
            $request->image->move(public_path('../../src/assets/posts'), $imageName);
            $post = new Post();
            $post->has_photo = true;
            $post->filename = $imageName;
            $post->user_id = $request->user_id;
            $post->description = $request->description;
            $post->save();

        }catch(Exception $e){

        }
    }


    function fetchUserPosts(Request $request){
        try{
            $recived = auth()->userOrFail();
            try{
                
                $result = DB::table('posts')->leftJoin('post_votes', function($join)
                {
                    $recived = auth()->userOrFail();
                    $join->on('posts.id', '=', 'post_votes.post_id')->where('post_votes.user_id', '=', $recived['id']);
               
                })
                ->select('posts.id', 'posts.user_id', 'posts.description', 'vote', 'posts.votes', 'posts.filename')
                ->where('posts.user_id', '=', $request->user_id)
                ->orderBy('posts.id', 'desc')->get();
                return response()->json(['posts' => $result], 200);
    
            }catch(Exception $e){
                return response()->json(['message' => $e]);
            }
        }catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e){
            error_log($e);
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }

    function fetchFallowPosts(Request $request){
        try{
            $recived = auth()->userOrFail();
            try{ // we have a problem sir
                $arrayRecived = json_decode($request->fallowList);
                $result = DB::table('posts')->leftJoin('post_votes', function($join)
                {
                    $recived = auth()->userOrFail();
                    $join->on('posts.id', '=', 'post_votes.post_id')->where('post_votes.user_id', '=', $recived['id']);
               
                })
                ->join('users', function($join)
                {
                    $recived = auth()->userOrFail();
                    $join->on('users.id', '=', 'posts.user_id');
               
                })
                ->select('posts.id', 'posts.user_id', 'posts.description', 'vote', 'posts.votes', 'posts.filename', 'users.lastName', 'users.firstName', 'users.profile_image')
                ->whereIn('posts.user_id', $arrayRecived)
                ->orderBy('posts.created_at', 'desc')->get();
                return response()->json(['posts' => $result], 200);
    
            }catch(Exception $e){
                return response()->json(['message' => $e]);
            }
        }catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e){
            error_log($e);
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }

    function postVote(Request $request){
        try{
            $recived = auth()->userOrFail();
        }catch(\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e){
            error_log($e);
            return response()->json(['error' => $e->getMessage()], 401);
        }
        try{
            $post = Post::where('id', $request->postId)->first();
            $post->votes += $request->vote;
            $post->save();
        }catch(Exception $e){
            return response()->json(['message' => $e]);
        }
    }
}