console.log("welcome to gallery");


function create_gallery_item(path, img_class) {
	const gallery_item = document.createElement("div");
	gallery_item.classList.add("gallery-item");
	gallery_item.classList.add(img_class);

	const gallery_img = document.createElement('img');
	gallery_img.classList.add("gallery-img");
	gallery_img.src = path;

	// const gallery_desc = document.createElement('div');
	// gallery_desc.classList.add("gallery-desc");
	// gallery_desc.innerHTML = img_desc;

	gallery_item.appendChild(gallery_img);
	// gallery_item.appendChild(gallery_desc);
	return gallery_item;
}

const imgs = [
	{ path:"1_1_IMG_9053.JPG", style: "big_img"},
	{ path:"1_2_DSC06439.JPG", style: "tall_img"},
	{ path:"1_2_IMG_9240.JPG", style: "tall_img"},
	{ path:"1_1_IMG_9019.JPG", style: "normal_img"},
	{ path:"1_2_IMG_9245.JPG", style: "tall_img"},
	{ path:"1_1_IMG_9039.JPG", style: "normal_img"},
	{ path:"3_1_IMG_8280.JPG", style: "wide_img"},
	{ path:"1_2_DSC06445.JPG", style: "tall_img"},
	{ path:"1_1_IMG_9134.JPG", style: "big_img"},
	{ path:"1_1_IMG_9142.JPG", style: "normal_img"},
	{ path:"1_1_IMG_8991.JPG", style: "normal_img"},
	{ path:"1_1_IMG_9153.JPG", style: "normal_img"},
	{ path:"3_1_IMG_7537.JPG", style: "wide_img"},
	{ path:"1_1_IMG_9268.JPG", style: "big_img"},
	{ path:"1_1_IMG_9164.JPG", style: "normal_img"},
	{ path:"1_1_IMG_9165.JPG", style: "normal_img"},
	{ path:"1_2_IMG_9285.JPG", style: "tall_img"},
	{ path:"1_1_IMG_9173.JPG", style: "normal_img"},
	{ path:"1_2_IMG_7516.JPG", style: "tall_img"},
	{ path:"1_1_IMG_9149.JPG", style: "normal_img"},
	{ path:"3_2_IMG_7569.JPG", style: "ratio_3_2"},
	{ path:"1_2_IMG_9224.JPG", style: "tall_img"},
	{ path:"1_2_IMG_9217.JPG", style: "tall_img"},
	{ path:"1_2_IMG_9263.JPG", style: "tall_img"},
	{ path:"3_1_IMG_9112.JPG", style: "wide_img"},
	{ path:"1_1_IMG_9071.JPG", style: "normal_img"},
	{ path:"1_1_IMG_9074.JPG", style: "normal_img"},
	{ path:"1_1_IMG_9294.JPG", style: "normal_img"}
	// { path:"3_1_IMG_8286.JPG", style: "wide_img"},




];

imgs.map((img) => {
		gallery.appendChild(create_gallery_item(`images/gallery/${img.path}`, img.style))
	}
);


