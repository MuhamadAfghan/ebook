<template> 
    <div class="card w-25"> 
        <div class="card-header d-flex align-items-center border-bottom"> 
            <span class="px-2 py-1 text-white text-bold bg-primary rounded-circle fs-5">H</span> 
            <div class="ms-3"> 
                <h6 class="mb-0 fs-sm">{{book.title}}</h6> <span class="text-muted fs-sm">Ariya</span> 
            </div> 
            <button class="btn text-muted ms-auto" type="button"><i class="fas fa-ellipsis-v"></i></button> 
        </div> 
        <div class="card-body"> Legenda Pocong Keliling adalah buku yang menceritakan tentang seorang pocong yang keliling kota untuk mencari teman baru. </div> 
    </div> 

</template> 

<script> 
export default { 
    name: 'CardComponent', 
    props: { 
        book: Object 
    }
}  
</script>