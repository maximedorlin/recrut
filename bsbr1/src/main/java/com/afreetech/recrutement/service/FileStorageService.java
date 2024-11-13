package com.afreetech.recrutement.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class FileStorageService {

    private final String uploadDir = "C:/"; // Chemin de stockage

    public FileStorageService() {
        try {
            Files.createDirectories(Paths.get(uploadDir)); // Crée le répertoire s'il n'existe pas
        } catch (IOException e) {
            throw new RuntimeException("Impossible de créer le répertoire de stockage.", e);
        }
    }

    public String storeFile(MultipartFile file) {
        String fileName = file.getOriginalFilename();
        Path targetLocation = Paths.get(uploadDir).resolve(fileName);

        try {
            Files.copy(file.getInputStream(), targetLocation);
            return fileName; // Retourne le nom du fichier stocké
        } catch (IOException e) {
            throw new RuntimeException("Impossible de stocker le fichier " + fileName + ". Veuillez réessayer.", e);
        }
    }

    public String storeFiles(List<MultipartFile> files) {
        StringBuilder fileNames = new StringBuilder();

        for (MultipartFile file : files) {
            String fileName = storeFile(file);
            fileNames.append(fileName).append(","); // Concatène les noms des fichiers
        }

        return fileNames.toString(); // Retourne tous les noms des fichiers
    }
}