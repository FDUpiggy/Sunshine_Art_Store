document.body.style.overflow = 'hidden';


/**
* 关闭弹出框的功能
*/
function closeModel() {
        document.getElementById("model").style.display = 'none';
        document.getElementById("modelDiv").style.display = 'none';
        // 不遮挡后面的内容将body设置为原始样式，也就是实现可滚动
        document.body.style.overflow = 'auto';
    }
