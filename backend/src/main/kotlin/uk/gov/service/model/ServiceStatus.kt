package uk.gov.service.model

data class ServiceStatus(
    val status: String,
    val version: String,
    val environment: String
) 