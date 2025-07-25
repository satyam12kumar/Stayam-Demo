<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <!-- bootstrap css link -->
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
     <!--font awesome link-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<!-- csslink -->
 <link rel="stylesheet" href="../style.css">
 <style>
.admin_image{
    width: 100px;
    object-fit: contain;
}
.footer{
    position:fixed;
    bottom:0;
    width: 100%;
    left:0;
}
 </style>
</head>
<body>
    <!-- navbar -->
    <div class="container-fluid p-0">
        <!-- first child -->
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
            <div class="container-fluid">
                <img src="../images/shoping-cart.jpeg" alt="shoping-cart" class="logo"> 
                 <nav class="navbar navbar-expand-lg ">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="" class="nav-link">Welcome Guest</a>
                        </li>
                    </ul>
                </nav>          
            </div>
        </nav>
        <!-- second child -->
         <div class="bg-light">
            <h3 class="text-center p-2">Manage Details</h3>
         </div>
         <!-- third child -->
          <div class="row">
            <div class="col md-12 bg-secondary p-1 d-flex align-items-center">
                <div class="p-2">
                    <a href="#"><img src="../images/girl2.jpg" alt="pineapplejuice" class="admin_image"></a>
                    <p class="text-light text-center">Admin Name</p>
                </div>
                <!-- button*10>a.nav-link.text.light.bg-info.my-1 -->
                <div class="button text-center">
                    <button class="my-3"><a href="insert_product.php" class="nav-link text-light bg-info my-1">Insert Products</a>
                    </button>
                    <button><a href="" class="nav-link text-light bg-info my-1">View Products</a>
                    </button>
                    <button><a href="index.php?insert_category" class="nav-link text-light bg-info my-1">Insert Categories</a>
                    </button>
                    <button><a href="" class="nav-link text-light bg-info my-1">View Categories</a>
                    </button>
                    <button><a href="index.php?insert_brands" class="nav-link text-light bg-info my-1">Insert Brands</a>
                    </button>
                    <button><a href="" class="nav-link text-light bg-info my-1">View Brands</a>
                    </button>
                    <button><a href="" class="nav-link text-light bg-info my-1">All Orders</a>
                    </button>
                    <button><a href="" class="nav-link text-light bg-info my-1">All Payments</a>
                    </button>
                    <button><a href="" class="nav-link text-light bg-info my-1">List Users</a>
                    </button>
                    <button><a href="" class="nav-link text-light bg-info my-1">Logout</a>
                    </button>
                </div>
            </div>
          </div>
    </div>
    <!-- fourt child -->
     <div class="container my-3">
        <?php
        if(isset($_GET['insert_category'])){
            include('insert_categories.php');
        }
        if(isset($_GET['insert_brands'])){
            include('insert_brands.php');
        }
        ?>
     </div>


<!-- last child -->
 <div class="bg-info p-3 text-center footer">
  <p>All rigths reserves ©- Designed by Tanya-2025</p>
 </div>   




    <!-- bootstrap js link -->
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>