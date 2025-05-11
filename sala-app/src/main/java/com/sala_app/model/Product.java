package com.sala_app.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

//@Entity
//@Table(name = "vue_produits") // ta vue MySQL existante
//public class Product {
//
//    @Id
//    @Column(name = "article_code")
//    private String codeArticle;
//
//    private String libelle;
//    private double prix;
//
//    public String getCodeArticle() {
//        return codeArticle;
//    }
//
//    public void setCodeArticle(String codeArticle) {
//        this.codeArticle = codeArticle;
//    }
//
//    public String getLibelle() {
//        return libelle;
//    }
//
//    public void setLibelle(String libelle) {
//        this.libelle = libelle;
//    }
//
//    public double getPrix() {
//        return prix;
//    }
//
//    public void setPrix(double prix) {
//        this.prix = prix;
//    }
//}


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "vue_articles") // La vue dans MySQL
public class Product {

    @Id
    @Column(name = "article_code")  // Nom de la colonne dans la vue
    private String articleCode;

    @Column(name = "designation")
    private String designation;

    @Column(name = "prix_achat")
    private double prixAchat;

    @Column(name = "prix_vente")
    private double prixVente;

    public String getArticleCode() {
        return articleCode;
    }

    public void setArticleCode(String articleCode) {
        this.articleCode = articleCode;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public double getPrixAchat() {
        return prixAchat;
    }

    public void setPrixAchat(double prixAchat) {
        this.prixAchat = prixAchat;
    }

    public double getPrixVente() {
        return prixVente;
    }

    public void setPrixVente(double prixVente) {
        this.prixVente = prixVente;
    }
}

