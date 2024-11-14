import "../pages/About.css";

export const About = () => {
  return (
    <div className="about-section">
      <nav className="breadcrumb">
        <a href="/">Home</a> » <a href="#">About Us</a>
      </nav>
      <div className="department-header">
        <img src="/logo.png" alt="Department Logo" className="department-logo" />
        <h1 className="department-title">The Department</h1>
      </div>
      <div className="department-description">
        <p>
          <strong>Department of Information and Public Relations (DIPR)</strong> of Arunachal Pradesh is the official
          agency responsible for disseminating government policies, programs, and initiatives to the public. Established
          to bridge the communication gap between the government and citizens, the department plays a crucial role in
          promoting transparency, awareness, and engagement through various media platforms. DIPR Arunachal Pradesh
          actively collaborates with both print and electronic media, organizing press releases, conferences, and public
          events to ensure that the state’s developmental projects and welfare schemes reach the wider audience.
        </p>
        <p>
          The department also serves as a vital resource for publicizing the rich cultural heritage and diverse
          traditions of Arunachal Pradesh, fostering unity and pride among its citizens. It operates under the guidance
          of the state’s Ministry of Information and Public Relations and is committed to maintaining a free flow of
          credible, timely information while promoting social harmony and national integration. DIPR Arunachal Pradesh
          also uses digital platforms and social media to effectively communicate with the younger population, ensuring
          that the department’s messages are widespread and impactful.
        </p>
        <p>Here is a list of our officials:</p>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name & Designation</th>
              <th>Mobile Numbers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shri Nyali Ete, IAS, Secretary</td>
              <td><a href="tel:9402275045">9402275045</a></td>
            </tr>
            <tr>
              <td>Shri Biswajit Goswami, Under Secretary</td>
              <td><a href="tel:8787619599">8787619599</a></td>
            </tr>
            <tr>
              <td>Shri Onyok Pertin, Director</td>
              <td><a href="tel:9862500110">9862500110</a></td>
            </tr>
            <tr>
              <td>Shri Gijum Tali, Deputy Director</td>
              <td><a href="tel:8414099015">8414099015</a></td>
            </tr>
            <tr>
              <td>Shri Marbang Ezing, Deputy Director</td>
              <td><a href="tel:9402290439">9402290439</a></td>
            </tr>
            <tr>
              <td>Shri Denga Bengia, Deputy Director</td>
              <td><a href="tel:9436051742">9436051742</a></td>
            </tr>
            <tr>
              <td>Shri Radhe Tajung, Assistant Director</td>
              <td><a href="tel:9436634666">9436634666</a></td>
            </tr>
            <tr>
              <td>Shri Mame Garu, F & AO</td>
              <td><a href="tel:9436256663">9436256663</a></td>
            </tr>
            <tr>
              <td>Smti Purabi Taikam, PRO</td>
              <td><a href="tel:7085314816">7085314816</a></td>
            </tr>
            <tr>
              <td>Ms. Higio Zarngam, PRO</td>
              <td><a href="tel:7005561288">7005561288</a></td>
            </tr>
            <tr>
              <td>Ms. Dugyir Padu, PRO</td>
              <td><a href="tel:9612498658">9612498658</a></td>
            </tr>
            <tr>
              <td>Shri Hage Habung, Art Expert</td>
              <td><a href="tel:7005762282">7005762282</a></td>
            </tr>
            <tr>
              <td>Shri Punyo Tani, Administrative Officer</td>
              <td><a href="tel:7085837058">7085837058</a></td>
            </tr>
            <tr>
              <td>Shri Tagia Pakba, Publication Manager</td>
              <td><a href="tel:9436052720">9436052720</a></td>
            </tr>
            <tr>
              <td>Ms. Ome Tayeng Taloh, APRO</td>
              <td><a href="tel:9436043360">9436043360</a></td>
            </tr>
            <tr>
              <td>Ms. Moina Pertin, APRO</td>
              <td><a href="tel:8132898070">8132898070</a></td>
            </tr>
            <tr>
              <td>Shri Manoj Bhattacharjee, Photographic Officer</td>
              <td><a href="tel:9774627168">9774627168</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
