import LegalLayout from '@/components/UI/Legal/LegalLayout.tsx';
import LegalNote from '@/components/UI/Legal/LegalNote.tsx';

const PolitiqueConfidentialitePage = () => {
    return (
        <LegalLayout title="Politique de confidentialité" lastUpdated="20 juin 2026">
            <p>
                La présente politique décrit la manière dont [Company-name] (« Rekap », « nous »)
                collecte et traite les données à caractère personnel des visiteurs et utilisateurs
                du site https://rekap.tech, conformément au Règlement (UE) 2016/679 (RGPD) et à la
                loi « Informatique et Libertés » du 6 janvier 1978 modifiée.
            </p>

            <h2>1. Responsable du traitement</h2>
            <p>
                Le responsable du traitement est [Company-name], [Address]. Pour toute question
                relative à vos données, vous pouvez nous contacter à : privacy@rekap.tech.
            </p>

            <h2>2. Données collectées et finalités</h2>
            <p>Nous collectons uniquement les données nécessaires aux finalités suivantes :</p>
            <table>
                <thead>
                    <tr>
                        <th>Finalité</th>
                        <th>Données concernées</th>
                        <th>Base légale</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Inscription à la liste d'attente (waitlist)</td>
                        <td>Adresse e-mail professionnelle</td>
                        <td>Consentement (art. 6.1.a RGPD)</td>
                    </tr>
                    <tr>
                        <td>Création et gestion du compte utilisateur</td>
                        <td>Nom, adresse e-mail, mot de passe (chiffré)</td>
                        <td>Exécution du contrat (art. 6.1.b RGPD)</td>
                    </tr>
                    <tr>
                        <td>Fourniture du service (génération d'updates clients)</td>
                        <td>
                            Données de tâches importées depuis vos outils connectés (ex. Asana),
                            contenu des updates générés
                        </td>
                        <td>Exécution du contrat (art. 6.1.b RGPD)</td>
                    </tr>
                    <tr>
                        <td>Envoi d'e-mails transactionnels et de service</td>
                        <td>Adresse e-mail, contenu des updates</td>
                        <td>Exécution du contrat (art. 6.1.b RGPD)</td>
                    </tr>
                    <tr>
                        <td>Amélioration du service et support</td>
                        <td>Données d'usage, demandes de support</td>
                        <td>Intérêt légitime (art. 6.1.f RGPD)</td>
                    </tr>
                </tbody>
            </table>

            <LegalNote>
                Données des clients finaux de votre agence : lorsque vous connectez un outil de
                gestion de projet (Asana), Rekap traite des données relatives à vos clients pour
                votre compte. Pour ces données, votre agence agit en qualité de responsable de
                traitement et Rekap en qualité de sous-traitant. Un accord de sous-traitance (DPA)
                conforme à l'article 28 du RGPD est disponible sur demande à privacy@rekap.tech.
            </LegalNote>

            <h2>3. Caractère obligatoire et profilage</h2>
            <p>
                Les données marquées comme obligatoires lors de la collecte sont nécessaires à la
                fourniture du service ; à défaut, nous ne pourrons pas créer votre compte ou vous
                inscrire à la liste d'attente. Aucune décision entièrement automatisée produisant
                des effets juridiques à votre égard n'est mise en œuvre. La génération d'updates par
                intelligence artificielle reste soumise à votre relecture et à votre validation
                avant tout envoi.
            </p>

            <h2>4. Durées de conservation</h2>
            <ul>
                <li>
                    <strong>Liste d'attente :</strong> jusqu'à l'ouverture des accès ou au retrait
                    de votre consentement, dans la limite de 3 ans à compter du dernier contact.
                </li>
                <li>
                    <strong>Compte utilisateur :</strong> pendant toute la durée de la relation
                    contractuelle, puis archivage jusqu'à 3 ans après la clôture du compte.
                </li>
                <li>
                    <strong>Données issues des outils connectés :</strong> pendant la durée de la
                    connexion, puis supprimées ou anonymisées après résiliation.
                </li>
                <li>
                    <strong>Données comptables et de facturation :</strong> 10 ans, conformément aux
                    obligations légales (art. L. 123-22 du Code de commerce).
                </li>
            </ul>

            <h2>5. Destinataires et sous-traitants</h2>
            <p>
                Vos données ne sont jamais vendues. Elles sont accessibles à nos équipes habilitées
                et à nos sous-traitants techniques, agissant sur nos instructions et présentant des
                garanties suffisantes :
            </p>
            <ul>
                <li>
                    <strong>Hébergement :</strong> OVH SAS (2 rue Kellermann, 59100 Roubaix
                    (France)).
                </li>
                <li>
                    <strong>Envoi d'e-mails :</strong> Resend (fournisseur d'e-mails
                    transactionnels).
                </li>
                <li>
                    <strong>Génération de texte par IA :</strong> [À COMPLÉTER — fournisseur du
                    modèle d'IA utilisé, ex. OpenAI, Anthropic]. Les contenus transmis au modèle le
                    sont aux seules fins de génération des updates.
                </li>
                <li>
                    <strong>Outils connectés à votre initiative :</strong> Asana (et, à terme,
                    ClickUp et monday.com), via une connexion que vous autorisez.
                </li>
            </ul>

            <h2>6. Transferts hors de l'Union européenne</h2>
            <p>
                Certains sous-traitants peuvent être situés en dehors de l'Union européenne. Dans ce
                cas, les transferts sont encadrés par des garanties appropriées au sens des articles
                44 et suivants du RGPD (notamment les clauses contractuelles types de la Commission
                européenne). Vous pouvez obtenir une copie de ces garanties en nous écrivant à{' '}
                privacy@rekap.tech .
            </p>

            <h2>7. Sécurité</h2>
            <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
                protéger vos données : chiffrement des mots de passe, chiffrement des communications
                (HTTPS), contrôle des accès et limitation des habilitations.
            </p>

            <h2>8. Vos droits</h2>
            <p>
                Conformément au RGPD, vous disposez des droits d'accès, de rectification,
                d'effacement, de limitation, d'opposition, de portabilité de vos données, ainsi que
                du droit de retirer votre consentement à tout moment et de définir des directives
                relatives au sort de vos données après votre décès.
            </p>
            <p>
                Pour exercer ces droits, écrivez-nous à privacy@rekap.tech . Nous répondons dans un
                délai d'un mois. Si vous estimez, après nous avoir contactés, que vos droits ne sont
                pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (
                <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">
                    www.cnil.fr
                </a>
                ).
            </p>

            <h2>9. Cookies</h2>
            <p>
                L'utilisation des traceurs est détaillée dans notre{' '}
                <a href="/politique-cookies">Politique de cookies</a>.
            </p>

            <h2>10. Modifications</h2>
            <p>
                La présente politique peut être mise à jour. Toute modification substantielle vous
                sera signalée par les moyens appropriés. La date de dernière mise à jour figure en
                tête de page.
            </p>
        </LegalLayout>
    );
};

export default PolitiqueConfidentialitePage;
