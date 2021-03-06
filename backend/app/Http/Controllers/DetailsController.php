<?php

namespace App\Http\Controllers;

use App\Models\Aplication;
use App\Models\Report;
use App\Models\Review;
use App\Models\User;
use Illuminate\Http\Request;
use App\Product;
use Illuminate\Support\Facades\DB;
use Spatie\Searchable\Search;

class DetailsController extends Controller
{
    public function search(Request $request)
    { // functie pentru cautarea unui user folosita in home page (cautare dinamica)
        $result = (new Search())->registerModel(User::class, ['firstName', 'lastName'])->search($request->input('query'));

        return response()->json($result);
    }

    public function pagination(Request $request)
    {//functie pentru paginare
        try {
            if ($request->searchedUser == '') {
                $users = User::paginate(10);
                return response()->json($users, 200);
            } else {
                $users = User::where('firstName', 'like', '%' . $request->searchedUser . '%')->orWhere('lastName', 'like', '%' . $request->searchedUser . '%')->orWhere('email', 'like', '%' . $request->searchedUser . '%')->paginate(10);
                return response()->json($users, 200);
            }
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function paginationReports(Request $request)
    {//functie pentru paginare
        try {
            $reports = DB::table('reports')->leftJoin('users as reported', function($join){
                $join->on('reports.reported_id', '=', 'reported.id');
            })->leftJoin('users as sender', function($join2){
                $join2->on('reports.sender_id', '=', 'sender.id');
            })->select('reports.updated_at', 'reports.reported_id', 'reports.sender_id', 'reports.reason', 'reports.report_type'
                ,'reports.link', 'sender.firstName as senderFName', 'sender.lastName as senderLName', 'reported.firstName as reportedFName',
                'reported.lastName as reportedLName', 'reports.id')->where('reports.solved', '=', 0)->paginate(10);
            return response()->json($reports, 200);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }
    public function paginationApplications(Request $request)
    {//functie pentru paginare
        try {
            $usersList = Aplication::select('user_id')->where('pending', '=', 1)->get();
            $usersList = $usersList->pluck('user_id')->toArray();
            $result = User::whereIn('id',  $usersList)->paginate(10);

            return response()->json($result, 200);
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function verifyData(Request $request)
    { //functie pentru verificarea token-ului si a unui user daca e admin
        try {
            $recived = auth()->userOrFail();
        } catch (\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) {
            return response()->json(['error' => $e->getMessage()], 401);
        }
        try {
            $isAdmin;
            $user = User::where('id', $recived['id'])->first();
            error_log($user->admin);
            if ($user->admin === 1) return response()->json(['isAdmin' => 1], 200);
            else return response()->json(['isAdmin' => 0], 200);
        } catch (Exception $e) {
            return response()->json(417);
        }
    }

    public function deleteUser(Request $request)
    {
        try {
            Review::where('reviewer_id', '=', $request->id)->delete();
            $user = User::where('id', $request->id)->first();
            error_log($request->id);
            $user->delete();
            return response()->json(['message' => 'success']);
        } catch (Exception $e) {
            return response()->json(['message' => $e]);
        }
    }
}
