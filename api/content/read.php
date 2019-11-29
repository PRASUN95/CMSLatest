<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
// include database and object files
include_once '../config/database.php';
include_once '../objects/content.php';
 
// instantiate database and content object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$content = new content($db);
 
// query contents
$stmt = $content->read();
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // contents array
    $contents_arr=array();
    $contents_arr["records"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $content_item=array(
            "id" => $ContentId,
            "name" => $Name,
            "description" => html_entity_decode($Descr),
            "category_name" => $category_name,
            "CreatedDate" => $CreatedDate
        );
 
        array_push($contents_arr["records"], $content_item);
    }
 
 
    // show contents data in json format
    echo json_encode($contents_arr);
}
 
else{

    // tell the user no contents found
    echo json_encode(
        array("message" => "No content found.")
    );
}
?>