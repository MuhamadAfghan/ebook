<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarExample"
                aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand mr-0 p-0" href="#"><img src="../assets/images/book-icon.svg" width="25" /></a>
            <div class="collapse navbar-collapse" id="navbarExample">
                <ul class="navbar-nav me-auto mb-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">Categories</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="d-flex align-items-center flex-column flex-lg-row">
                    <form class="me-2 mb-2 mb-lg-0">
                        <input type="text" class="form-control form-control-sm" placeholder="Search Book by Title..." />
                    </form>
                    <a class="btn btn-primary" href="">Search</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>