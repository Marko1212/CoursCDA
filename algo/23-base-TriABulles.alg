<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="FIN_POUR" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2etat="inactif" F2defaut="" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param nbDecimales="8" totalAffichages="1000" epaisseurLigne="2" epaisseurPoint="2" totalBoucles="5000000" maxBoucle="500000" arrondiAuto="vrai"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#LISTE#SERIE" algoitem="SERIE EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#I" algoitem="I EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#N" algoitem="N EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#TEMP" algoitem="TEMP EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#PERMUTE" algoitem="PERMUTE EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="4#ENTREZ LE NOMBRE DES ELEMENTS A TRIER#0" algoitem="AFFICHER &quot;ENTREZ LE NOMBRE DES ELEMENTS A TRIER&quot;"/>
        <item code="2#N#pasliste" algoitem="LIRE N"/>
        <item code="4#ENTREZ LES NOMBRES#0" algoitem="AFFICHER &quot;ENTREZ LES NOMBRES&quot;"/>
        <item code="12#I#1#N" algoitem="POUR I ALLANT_DE 1 A N">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="2#SERIE#I" algoitem="LIRE SERIE[I]"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="5#PERMUTE#1#pasliste" algoitem="PERMUTE PREND_LA_VALEUR 1"/>
        <item code="15#PERMUTE == 1" algoitem="TANT_QUE (PERMUTE == 1) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="5#PERMUTE#0#pasliste" algoitem="PERMUTE PREND_LA_VALEUR 0"/>
            <item code="12#I#1#N - 1" algoitem="POUR I ALLANT_DE 1 A N - 1">
                <item code="13#debutpour" algoitem="DEBUT_POUR"/>
                <item code="6#SERIE[I] > SERIE[I+1]" algoitem="SI (SERIE[I] > SERIE[I+1]) ALORS">
                    <item code="7#debutsi" algoitem="DEBUT_SI"/>
                    <item code="5#TEMP#SERIE[I]#pasliste" algoitem="TEMP PREND_LA_VALEUR SERIE[I]"/>
                    <item code="5#SERIE#SERIE[I+1]#I" algoitem="SERIE[I] PREND_LA_VALEUR SERIE[I+1]"/>
                    <item code="5#SERIE#TEMP#I+1" algoitem="SERIE[I+1] PREND_LA_VALEUR TEMP"/>
                    <item code="5#PERMUTE#1#pasliste" algoitem="PERMUTE PREND_LA_VALEUR 1"/>
                    <item code="8#finsi" algoitem="FIN_SI"/>
                </item>
                <item code="14#finpour" algoitem="FIN_POUR"/>
            </item>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="4#La liste des nombres triée dans l'ordre croissant est :#1" algoitem="AFFICHER &quot;La liste des nombres triée dans l'ordre croissant est :&quot;"/>
        <item code="12#I#1#N" algoitem="POUR I ALLANT_DE 1 A N">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="3#SERIE#1#I" algoitem="AFFICHER SERIE[I]"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
