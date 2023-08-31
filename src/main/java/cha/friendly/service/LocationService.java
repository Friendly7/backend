package cha.friendly.service;

import cha.friendly.domain.Location;
import cha.friendly.repository.LocationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class LocationService {
    private final LocationRepository locationRepository;

    public Long join(Location location) {
        locationRepository.save(location);
        return location.getId();
    }
}
