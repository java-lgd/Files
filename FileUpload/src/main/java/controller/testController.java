package controller;

import java.io.File;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

@Controller
public class testController {

	@RequestMapping("sss")
	public  @ResponseBody String aaa(@RequestParam("file") CommonsMultipartFile file,HttpServletRequest req )throws Exception {
		String oname=file.getOriginalFilename();
		String ex=oname.substring(oname.lastIndexOf("."),oname.length());
		String nname = UUID.randomUUID()+ex;
  
		String path=req.getSession().getServletContext().getRealPath("/");
		path=new File(path).getParentFile().getPath()+"\\upload";
		System.out.println(path);
		file.transferTo(new File(path,nname));
		return "\\upload\\"+nname;
	}
	
	@RequestMapping("index")
	public void index(ModelMap m) {
		m.put("arr", new String[] {"/upload/1db67f48-2e86-4088-9f2f-3c19438f2735.jpg","/upload/99e42f74-86c3-4935-a65b-11b6a476e065.jpg","/upload/a52c7276-1cb2-40d2-b0fd-2c6c8cbc2bc3.jpg"});
	}
	
}
