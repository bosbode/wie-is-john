import webfont from "webfontloader";

function Webfont(){
	webfont.load({
    	google: {
      		families: ['Roboto+Slab:300,400']
		},
		custom: {
			families: ['fontawesome'],
			urls: ['user/themes/john/assets/font-awesome/css/font-awesome.min.css']
		}
  	});
}

export default Webfont;