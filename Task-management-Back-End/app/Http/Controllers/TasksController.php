<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TasksController extends Controller
{
    public function index()
{
    $tasks = Task::all();
    return $tasks;

    //get all Tasks in variable $tasks 
}

    public function store(Request $request)
    {
        $task = new Task;
        $task->title = $request -> title;
        $task->description = $request -> description;
        $task->save();

        return $task;

        //create a new task (title and description)
    }


    public function update(Request $request,$id)
    {
        $task = Task::where('id', '=', $request->id)->update(['status' => $request->status]);
        
        //this line is for change the status value (checked or unchecked the tasks)
    }

    public function destroy(Request $request,$id)
    {
        $task=Task::destroy($id);
        return $task;

        //delet task with specific id
    }

}
