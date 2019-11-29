<?php
class Content{
 
    // database connection and table name
    private $conn;
    private $table_name = "app_content";
 
    // object properties
    public $ContentId;
    public $Name;
    public $Descr;
    public $CategoryId;
    public $CreatedDate;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
	// read contents
function read(){
 
    // select all query
    $query = "SELECT
                c.Name, c.ContentId,c.CategoryId, c.Descr, c.CreatedDate,p.name AS category_name
            FROM
                " . $this->table_name . " c
				LEFT JOIN
                    app_category p
                        ON p.Category_Id = c.CategoryId
            ORDER BY
                c.CreatedDate DESC ";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // execute query
    $stmt->execute();
 
    return $stmt;
}
// create content
function create(){
 
    // query to insert record
    $query = "INSERT INTO
                " . $this->table_name . "
            SET
                Name=:Name, ContentId=:ContentId,CategoryId=:CategoryId, Descr=:Descr";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->Name=htmlspecialchars(strip_tags($this->Name));
    $this->ContentId=htmlspecialchars(strip_tags($this->ContentId));
    $this->Descr=htmlspecialchars(strip_tags($this->Descr));
    $this->CategoryId=htmlspecialchars(strip_tags($this->CategoryId));
 
    // bind values
    $stmt->bindParam(":Name", $this->Name);
    $stmt->bindParam(":ContentId", $this->ContentId);
    $stmt->bindParam(":Descr", $this->Descr);
    $stmt->bindParam(":CategoryId", $this->CategoryId);
 
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