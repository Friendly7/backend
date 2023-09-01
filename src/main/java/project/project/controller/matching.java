package project.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import project.project.domain.Advicerequest;
import project.project.domain.Adviceuser;
import project.project.repository.AdviceRequestCRUDRepository;
import project.project.repository.AdviceUserCRUDRepository;
import project.project.repository.UserCRUDRepository;

import java.util.List;

@Controller
public class matching {
    @Autowired
    UserCRUDRepository userCRUDRepository;
    @Autowired
    AdviceRequestCRUDRepository adviceRequestCRUDRepository;

    @Autowired
    AdviceUserCRUDRepository adviceUserCRUDRepository;

    @GetMapping(value = "/matchinglist")public String matchinglist(@RequestParam(value = "request")Long id,@RequestParam(value = "one")String one, @RequestParam(value = "two")String two, @RequestParam(value = "three")String three, Model model){
        Advicerequest requestval = adviceRequestCRUDRepository.findByRequest(id);
        if (one.equals("가격")){
            if (two.equals("시간")){
                List<Adviceuser> adviceusers = adviceUserCRUDRepository.findByUserListOneIsPrice1(requestval.getPrice(), requestval.getAdvice_time(), requestval.getProfessional());
                model.addAttribute("list", adviceusers);
                model.addAttribute("id", id);
                return "/adviceRequestMentorList";
            }
            else{
                List<Adviceuser> adviceusers = adviceUserCRUDRepository.findByUserListOneIsPrice2(requestval.getPrice(), requestval.getProfessional(), requestval.getAdvice_time());
                model.addAttribute("list", adviceusers);
                model.addAttribute("id", id);
                return "/adviceRequestMentorList";
            }
        }
        if (one.equals("시간")){
            if (two.equals("가격")){
                List<Adviceuser> adviceusers = adviceUserCRUDRepository.findByUserListOneIsTime1(requestval.getAdvice_time(), requestval.getPrice(), requestval.getProfessional());
                model.addAttribute("list", adviceusers);
                model.addAttribute("id", id);
                return "/adviceRequestMentorList";
            }
            else{
                List<Adviceuser> adviceusers = adviceUserCRUDRepository.findByUserListOneIsTime2(requestval.getAdvice_time(), requestval.getProfessional(), requestval.getPrice());
                model.addAttribute("list", adviceusers);
                model.addAttribute("id", id);
                return "/adviceRequestMentorList";
            }
        }
        if (one.equals("전문")){
            if (two.equals("시간")){
                List<Adviceuser> adviceusers = adviceUserCRUDRepository.findByUserListOneIsPro1(requestval.getProfessional(), requestval.getAdvice_time(), requestval.getPrice());
                model.addAttribute("list", adviceusers);
                model.addAttribute("id", id);
                return "/adviceRequestMentorList";
            }
            else{
                List<Adviceuser> adviceusers = adviceUserCRUDRepository.findByUserListOneIsPro2(requestval.getProfessional(), requestval.getAdvice_time(), requestval.getPrice());
                model.addAttribute("list", adviceusers);
                model.addAttribute("id", id);
                return "/adviceRequestMentorList";
            }
        }
        return "/main";
    }

    @GetMapping(value = "/matchingMentor")public String matchingMentor(@RequestParam(value = "request_id")Long request_id, @RequestParam(value = "mentor_id")Long mentor_id,Model model){
        Advicerequest result = adviceRequestCRUDRepository.findByRequest(request_id);
        Adviceuser result2 = adviceUserCRUDRepository.findByUser(mentor_id);
        Long  mentor = result2.getId();
        result.setMatmentornum(mentor);
        result.setMatching("요청대기");
        result.setUser_waiting("대기");
        result.setMentor_waiting("대기");
        result.setMatmentorname(result2.getUser_id());
        adviceRequestCRUDRepository.save(result);
        return "/main";
    }
    @PostMapping(value = "/mentorwaitinglist")public String mentorwaitinglist(@RequestParam(value = "mentor_id")Long id, Model model){
        List<Advicerequest> result = adviceRequestCRUDRepository.findByMentorWaitingList(id);
        model.addAttribute("list", result);
        return "/mentorWaitingList";
    }

    @PostMapping(value = "/mentorwaiting")public String mentorwaiting(@RequestParam(value = "request_id")Long request_id, @RequestParam(value = "mentor_id")Long mentor_id, @RequestParam(value = "popUP")Long popUp, Model model){
        Advicerequest result = adviceRequestCRUDRepository.findByRequest(request_id);
        if (popUp==0)
        {
            result.setMentor_waiting("거절");
        }
        else if (popUp==1) {
            result.setMentor_waiting("수락");
        }
        if (result.getUser_waiting().equals("수락") && result.getMentor_waiting().equals("수락")){
            result.setMatching("매칭완료");
        }
        if (result.getUser_waiting().equals("수락") && result.getMentor_waiting().equals("거절")){
            result.setMatching("매칭거절");
        }
        if (result.getUser_waiting().equals("거절") && result.getMentor_waiting().equals("수락")){
            result.setMatching("매칭거절");
        }
        adviceRequestCRUDRepository.save(result);
        return "/main";
    }

    @PostMapping(value = "/userwaitinglist1")public String userwaitinglist1(@RequestParam(value = "user_id")Long id, Model model){
        List<Advicerequest> result = adviceRequestCRUDRepository.findByUserWaitingList(id);
        model.addAttribute("list", result);
        return "/userWaitingList1";
    }

    @PostMapping(value = "/userwaitinglist2")public String userwaitinglist2(@RequestParam(value = "request_id")Long request_id, @RequestParam(value = "mentor_id")Long mentor_id, Model model){
        Adviceuser adviceuser = adviceUserCRUDRepository.findByUser(mentor_id);
        List<Advicerequest> result = adviceRequestCRUDRepository.findByUserWaitingList(request_id);
        model.addAttribute("list", adviceuser);
        model.addAttribute("list2", result);
        return "/userWaitingList2";
    }

    @PostMapping(value = "/userwaiting")public String userwaiting(@RequestParam(value = "request_id")Long request_id, @RequestParam(value = "user_id")Long user_id, @RequestParam(value = "popUP")Long popUp, Model model){
        Advicerequest result = adviceRequestCRUDRepository.findByUserIDRequest(user_id);
        if (popUp==0)
        {
            result.setUser_waiting("거절");
        }
        else if (popUp==1) {
            result.setUser_waiting("수락");
        }
        if (result.getUser_waiting().equals("수락") && result.getMentor_waiting().equals("수락")){
            result.setMatching("매칭완료");
        }
        if (result.getUser_waiting().equals("수락") && result.getMentor_waiting().equals("거절")){
            result.setMatching("매칭거절");
        }
        if (result.getUser_waiting().equals("거절") && result.getMentor_waiting().equals("수락")){
            result.setMatching("매칭거절");
        }
        adviceRequestCRUDRepository.save(result);
        return "/main";
    }

    @GetMapping(value = "/ReMatchingList")public String ReMatchingList(Model model){
        List<Advicerequest> rematchinglist = adviceRequestCRUDRepository.findByReMatchingList();
        model.addAttribute("list", rematchinglist);
        return "/rematchinglist";
    }

}
