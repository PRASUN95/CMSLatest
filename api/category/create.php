<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// get database connection
include_once '../config/database.php';
 
// instantiate category object
include_once '../objects/category.php';
 
$database = new Database();
$db = $database->getConnection();
 
$category = new category($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// make sure data is not empty
if(
    !empty($data->name)
){
 
    // set category property values
    $category->Name = $data->name;
 
    // create the category
    if($category->create()){

 
        // tell the user
        echo json_encode(array("message" => "category was created."));
    }
 
    // if unable to create the category, tell the user
    else{

 
        // tell the user
        echo json_encode(array("message" => "Unable to create category."));
    }
}
 
// tell the user data is incomplete
else{
 
    // set response code - 400 bad request
 
    // tell the user
    echo json_encode(array("message" => "Unable to create category. Data is incomplete."));
}
?>