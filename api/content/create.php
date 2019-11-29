<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// get database connection
include_once '../config/database.php';
 
// instantiate content object
include_once '../objects/content.php';
 
$database = new Database();
$db = $database->getConnection();
 
$content = new content($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// make sure data is not empty
if(
    !empty($data->name) &&
    !empty($data->category_id) &&
    !empty($data->description)
){
 
    // set content property values
    $content->Name = $data->name;
    $content->CategoryId = $data->category_id;
    $content->ContentId = $data->id;
    $content->Descr = $data->description;
    //$content->created = date('Y-m-d H:i:s');
 
    // create the content
    if($content->create()){

 
        // tell the user
        echo json_encode(array("message" => "content was created."));
    }
 
    // if unable to create the content, tell the user
    else{

 
        // tell the user
        echo json_encode(array("message" => "Unable to create content."));
    }
}
 
// tell the user data is incomplete
else{
 
    // set response code - 400 bad request
 
    // tell the user
    echo json_encode(array("message" => "Unable to create content. Data is incomplete."));
}
?>