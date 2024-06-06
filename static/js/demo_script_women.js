let w_ct_idx = 0;
let w_cb_idx = 0;

function changeWomenImage(direction, type, subdir, ct_num, cb_num) {
    if (type === 'top_garment') {
        if (direction === 'next') {
            w_ct_idx = (w_ct_idx + 1) % ct_num;
        } else {
            w_ct_idx = (w_ct_idx - 1 + ct_num) % ct_num;
        }
        document.getElementById('womenTopGarmentImage').src = `static/demo_images/${subdir}/ct_${w_ct_idx}.jpg`;
    } else {
        if (direction === 'next') {
            w_cb_idx = (w_cb_idx + 1) % cb_num;
        } else {
            w_cb_idx = (w_cb_idx - 1 + cb_num) % cb_num;
        }
        document.getElementById('womenBottomGarmentImage').src = `static/demo_images/${subdir}/cb_${w_cb_idx}.jpg`;
    }

    document.getElementById('womenTryonImage').src = `static/demo_images/${subdir}/ct_${w_ct_idx}--cb_${w_cb_idx}.jpg`;
}


function switchWomenTryOn(type, subdir) {
    if (type === 'person') {
        document.getElementById('womenTryonImage').src = `static/demo_images/${subdir}/person.jpg`;
    } else {
        document.getElementById('womenTryonImage').src = `static/demo_images/${subdir}/ct_${w_ct_idx}--cb_${w_cb_idx}.jpg`;
    }
}