<!-- connect files -->
<?php
include('includes/connect.php');
include('functions/common_function.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Commerce Website using PHP and MYSQL</title>
    <!--bootstrap css link-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!--font awesome link-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="style.css">
</head>
<body>
</body>
<!-- navbar -->
<div class="container-fluid p-0">
    <!-- first child -->
     <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid">
    <img src="images/shoping-cart.jpeg" alt="" class="logo">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.php">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="display_all.php">Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-solid fa-cart-shopping"></i><sup>1</sup></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Total Price</a>
        </li>
      </ul>
      <form class="d-flex" action="search_product.php" method="get">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="search_data">
         <input type="submit" value="Search" class="btn btn-outline-light" name="search_data_product">
      </form>
    </div>
  </div>
</nav>
<!-- second child -->
 <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
  <ul class="navbar-nav me-auto">
     <li class="nav-item">
          <a class="nav-link" href="#">Welcome Guest</a>
        </li>
       <li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
    </li>
  </ul>
</nav>  
  <!-- third child -->
   <div class="bg-light">
    <h3 class="text-center">Hidden Store</h3>
    <p class="text-center">Communication is at the heart of E-commerce community</p>
   </div>
 <!-- fourth child -->
  <div class="row px-1">
    <div class="col-md-10">
      <!-- products -->
       <div class="row">

       <!-- fetching products -->
        <?php
        //calling functions
          search_product();
          get_unique_categories();
          get_unique_brands();
        ?>
        <!-- <div class="col-md-4 mb-2">
          <div class="card" >
  <img src="./images/apple.jpeg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Apple</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    // <a href="#" class="btn btn-info">Add to Cart</a>
    // <a href="#" class="btn btn-secondary">View More</a>
  //</div>
//</div> -->
<!-- </div> -->
<!-- row end -->
</div>
<!-- col end -->
</div>
    <div class="col-md-2 bg-secondary p-0">
      <!-- brands to be displayed-->
       <ul class="navbar-nav md-auto text-center">
        <li class="nav-item">
          <a href="#" class="nav-link text-light bg-info"><h4>Delivery Brands</h4></a>
        </li>
        <?php
        getbrands();
        ?>
        
       </ul>
       <!-- categories to be displayed -->
         <ul class="navbar-nav md-auto text-center">
        <li class="nav-item">
          <a href="#" class="nav-link text-light bg-info"><h4>Categories</h4></a>
        </li>
        <?php
       getcategories();
       
        ?>
        
       </ul>
    </div>
  </div>
  <!-- last child -->
 <!-- include footer -->
  <?php
   include("./includes/footer.php");
  ?>
</div>

<!--bootstrap js link-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</html>