<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
// include database and object files
include_once '../config/database.php';
include_once '../objects/category.php';
 
// instantiate database and category object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$category = new category($db);
 
// query categorys
$stmt = $category->read();
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // categorys array
    $categorys_arr=array();
    $categorys_arr["records"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $category_item=array(
            "id" => $Category_Id,
            "name" => $Name,
            "CreatedDate" => $Created_Date
        );
 
        array_push($categorys_arr["records"], $category_item);
    }
 
 
    // show categorys data in json format
    echo json_encode($categorys_arr);
}
 
else{

    // tell the user no categorys found
    echo json_encode(
        array("message" => "No category found.")
    );
}
?>