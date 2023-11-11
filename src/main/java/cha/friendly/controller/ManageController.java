package cha.friendly.controller;

import cha.friendly.domain.Dto.ReportUser;
import cha.friendly.domain.Member;
import cha.friendly.domain.Report;
import cha.friendly.repository.ManageRepository;
import cha.friendly.repository.MemberCRUDRepository;
import cha.friendly.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@Slf4j
public class ManageController {
    private final ManageRepository manageRepository;
    private final MemberCRUDRepository memberCRUDRepository;
    private final MemberService memberService;

    @GetMapping("/manage/reportList")
    public List<Report> reportList() {
        List<Report> list = manageRepository.findAllByStatus("처리대기");
        if(list.size() == 0)
            return null;
        return list;
    }
    @GetMapping("/manage/report/{id}")
    public List<Report> reportList(@PathVariable Long id) {
        List<Report> list = manageRepository.findAllById(id);
        if(list.size() == 0)
            return null;
        return list;
    }
    @PostMapping("/manage/report")
    public String reportAccept(@RequestBody ReportUser user) {
        List<Report> allById = manageRepository.findAllById(Long.valueOf(user.getReport_id()));
        allById.get(0).setStatus("처리완료");
        manageRepository.save(allById.get(0));
        Member byNameMember = memberCRUDRepository.findByNameMember(user.getName());

        byNameMember.setReportCnt(byNameMember.getReportCnt()+1);
        if(byNameMember.getReportCnt()>=3) {
            memberService.ban(String.valueOf(byNameMember.getId()));
            return byNameMember.getName();
        }
        return "noBan";
    }
    @PostMapping("/manage/report/pass")
    public void reportNo(@RequestBody ReportUser user) {
        List<Report> allById = manageRepository.findAllById(Long.valueOf(user.getReport_id()));
        allById.get(0).setStatus("처리완료");
        manageRepository.save(allById.get(0));
    }
}
