//package cha.friendly.controller;
//
//import cha.friendly.domain.Advicerequest;
//import cha.friendly.domain.Member;
//import cha.friendly.repository.AdviceRequestCRUDRepository;
//import cha.friendly.repository.MemberCRUDRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import javax.servlet.http.HttpSession;
//import java.util.List;
//
//@Controller
//@RequiredArgsConstructor
//public class adviceRequest {
//    MemberCRUDRepository memberCRUDRepository;
//    AdviceRequestCRUDRepository adviceRequestCRUDRepository;
//
//
//    @PostMapping(value = "/adviceRequest")public String adviceRequest(@RequestParam(value = "name")String name, @RequestParam(value = "time")String time, @RequestParam(value = "onoffline")String onoffline,
//                                                                      @RequestParam(value = "category")String category, @RequestParam(value = "dow")String dow,@RequestParam(value = "professional")String professional, @RequestParam(value = "minPrice")int minPrice,
//                                                                      @RequestParam(value = "maxPrice")int maxPrice,@RequestParam(value = "expStat")boolean ExpStat,@RequestParam(value = "significant")String significant,
//                                                                      @RequestParam(value = "one")String one, @RequestParam(value = "two")String two, @RequestParam(value = "three")String three, HttpSession session){
//        int expStat;
//        if (ExpStat == true){
//            expStat = 1;
//        }
//        else {
//            expStat = 0;
//        }
//        Member member = memberCRUDRepository.findByNameMember(name);
//        Advicerequest adviceRequest = new Advicerequest();
//        adviceRequest.setUser_id(member.getId());
//        adviceRequest.setUser_name(name);
//        adviceRequest.setDOW(dow);
//        adviceRequest.setTime(time);
//        adviceRequest.setOnoffline(onoffline);
//        adviceRequest.setCategory(category);
//        adviceRequest.setProfessional(professional);
//        adviceRequest.setMinPrice(minPrice);
//        adviceRequest.setMaxPrice(maxPrice);
//        adviceRequest.setExpStat(expStat);
//        adviceRequest.setSignificant(significant);
//        adviceRequest.setOne(one);
//        adviceRequest.setTwo(two);
//        adviceRequest.setThree(three);
//        adviceRequest.setMatching("요청대기");
//        adviceRequestCRUDRepository.save(adviceRequest);
//        session.setAttribute("data", member.getId());
//        return "redirect:/moveAdviceRequest";
//    }
//
//    @GetMapping(value = "/moveAdviceRequest")public String adviceRequest1(HttpSession session,Model model){
//        Long member_id  = Long.valueOf(String.valueOf(session.getAttribute("data")));
//        Member member = memberCRUDRepository.findByMember(member_id);
//        model.addAttribute("loginData", member);
//        return "/loginResult";
//    }
//
//
//    @GetMapping (value = "/AdviceRequestLsit1")public String AdviceRequestLsit1(Model model){
//        List<Advicerequest> advicerequest = adviceRequestCRUDRepository.findByAdviceRequestList();
//        model.addAttribute("requestList", advicerequest);
//        return "/adviceRequestList";
//    }
//
//}
