I test
Feature: Zakupy niezalogowanego klienta w sklepie "gymbeam.pl"

    Scenario: Użytkownik wyszukuje produkt i dokonuje zakupu

        Given użytkownik znajduje się na stronie "gymbeam.pl"

        When użytkownik wyszukuje w rozwijanym menu "Żywność dietetyczna" i wybiera "Masła orzechowe"
        And użytkownik wybiera produkt "Masło z orzechów nerkowca" klikając na logo koszyka i produkt pojawia się w koszyku
        And użytkownik klika najeżdża na symbol koszyka i w rozwiniętym menu wybiera "Przejdź do kasy"
        And użytkownik nie posiada konta i nie ma zamiaru zakładać, więc uzupełnia dane przesyłki (Imię, Nazwisko, Adres, telefon)
        And użytkownik wybiera formę dostawy i klika "Dalej"
        And użytkownik wybiera formę płatności oraz akceptuje regulamin sklepu, a następnie klika "Zamawiam i płacę"
        And użytkownik dokonuje płatności

        Then transakcja użytkownik zostaje przekazana do realizacji, a on zostaje poinformowany o terminie dostawy



II test
Feature: Zakupy zalogowane klienta w sklepie "gymbeam.pl"

    Scenario: Użytkowni dokonuje zakupu produktu "Koszulka FIT Grey"

        Given użytkownik posiada produkt dodany do koszyka
        And użytkownik jest zalogowany na konto klienta

        When użytkownik wybiera przycisk "Przejdź do Kasy" w rozwijanym menu pod logiem koszyka w menu strony
        And widoczne są dane użytkownika pod napisem "Adres wysyłki"
        And użytkownik wybiera formę dostawy i klika "Dalej"
        And użytkownik wybiera formę płatności i akceptuje regulamin sklepu, by następnie kliknąć "Zamawiam i płacę"
        And użytkownik uiszcza płatność zgodnie z wybraną formą 

        Then transakcja użytkownik zostaje przekazana do realizacji, a on zostaje poinformowany o terminie dostawy