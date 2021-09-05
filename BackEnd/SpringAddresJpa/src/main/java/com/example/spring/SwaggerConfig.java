package com.example.spring;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collections;


@Configuration
@EnableSwagger2
public class SwaggerConfig {

   @Bean
   public Docket customDocket(){
      return new Docket(DocumentationType.SWAGGER_2)
    		  .select()
              .apis(RequestHandlerSelectors.any())
              .paths(PathSelectors.any())
              .build()
              .apiInfo(getApiInfo());
   }

   private ApiInfo getApiInfo() {
	   return new ApiInfo(
		"Jpa Address Zip Code API\r\n",
		"This is a copy of the ViaCep API Produced by Eduardo Jose E Bruno Bilheri",
		"",
		"SpringAddressJpaDUO",
		new Contact(
				"Eduado Jose Gautier e Bruno Bilheri\r\n",
				"https://github.com/EduardoGautier/SpringAddressJpaDUO",""),"","", Collections.emptyList());
   }


}