package uk.gov.service.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import uk.gov.service.model.ServiceStatus

@RestController
@RequestMapping("/api")
class ServiceController {

    @GetMapping("/status")
    fun getStatus(): ServiceStatus {
        return ServiceStatus(
            status = "operational",
            version = "1.0.0",
            environment = "development"
        )
    }
} 