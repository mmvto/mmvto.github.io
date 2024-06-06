let ct_idx = 0;
let cb_idx = 0;

function changeImage(direction, type, subdir, ct_num, cb_num) {
    if (type === 'top_garment') {
        if (direction === 'next') {
            ct_idx = (ct_idx + 1) % ct_num;
        } else {
            ct_idx = (ct_idx - 1 + ct_num) % ct_num;
        }
        document.getElementById('menTopGarmentImage').src = `static/demo_images/${subdir}/ct_${ct_idx}.jpg`;
    } else {
        if (direction === 'next') {
            cb_idx = (cb_idx + 1) % cb_num;
        } else {
            cb_idx = (cb_idx - 1 + cb_num) % cb_num;
        }
        document.getElementById('menBottomGarmentImage').src = `static/demo_images/${subdir}/cb_${cb_idx}.jpg`;
    }

    document.getElementById('menTryonImage').src = `static/demo_images/${subdir}/ct_${ct_idx}--cb_${cb_idx}.jpg`;
}


function switchPersonTryOn(type, subdir) {
    if (type === 'person') {
        document.getElementById('menTryonImage').src = `static/demo_images/${subdir}/person.jpg`;
    } else {
        document.getElementById('menTryonImage').src = `static/demo_images/${subdir}/ct_${ct_idx}--cb_${cb_idx}.jpg`;
    }
}