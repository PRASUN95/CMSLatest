<?php
class Category{
 
    // database connection and table name
    private $conn;
    private $table_name = "app_category";
 
    // object properties
    public $CategoryId;
    public $Name;
    public $CreatedDate;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
	// read category
function read(){
 
    // select all query
    $query = "SELECT
                c.Name,c.Category_Id, c.Created_Date
            FROM
                " . $this->table_name . " c
            ORDER BY
                c.Created_Date DESC ";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // execute query
    $stmt->execute();
 
    return $stmt;
}
// create category
function create(){
 
    // query to insert record
    $query = "INSERT INTO
                " . $this->table_name . "
            SET
                Name=:Name";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->Name=htmlspecialchars(strip_tags($this->Name));
 
    // bind values
    $stmt->bindParam(":Name", $this->Name);
 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}
public function count(){
    $query = "SELECT COUNT(*) as total_rows FROM " . $this->table_name . "";
 
    $stmt = $this->conn->prepare( $query );
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
    return $row['total_rows'];
}
}