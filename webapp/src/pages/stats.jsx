import "../styles.css";
import Header from "../components/Header";
import NavMenu from "../components/NavMenu";
import { PieChart } from '@mui/x-charts/PieChart';

const Stats = () => {
  return (
    <div id="stats">
      <Header />
      <section id="statsBlockAll">

      </section>
      <section id="statsContent">
        <NavMenu />
        <section id="generalStatsContainer">
          <section id="statsLeft">
            <section className="pilotInfo">
              <div className="pilotInfoBlock">
                <h1><u>Drone ID:</u></h1>
                #521F
              </div>
              <div className="pilotInfoBlock">
                <h1><u>Pilot ID:</u></h1>
                #WER58
              </div>
              <div className="pilotInfoBlock">
                <h1><u>Flight Hours:</u></h1>
                167
              </div>
            </section>
            <section className="expiditionDropDown">
              <select name="expidtion" id="expidition">
                <option value="databasefetch">Expidition</option>
              </select>
            </section>
            <section className="expiditionInfoBlock">
              <h1><u>Expidition data:</u></h1>
              <table>
                <tbody>
                  <tr>
                    <td>Start time:</td>
                    <td>Value 1</td>
                  </tr>
                  <tr>
                    <td>End time:</td>
                    <td>Value 2</td>
                  </tr>
                  <tr>
                    <td>Latitude:</td>
                    <td>Value 3</td>
                  </tr>
                  <tr>
                    <td>Lognitude:</td>
                    <td>Value 4</td>
                  </tr>
                  <tr>
                    <td>Average gas concentration:</td>
                    <td>Value 5</td>
                  </tr>
                  <tr>
                    <td>Highest concentration:</td>
                    <td>Value 6</td>
                  </tr>
                  <tr>
                    <td>Lowest concentration:</td>
                    <td>Value 7</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section className="piChart">
            <PieChart series={[
          {data: [
            {id: 0, value: 10, label: 'Series A'},
            {id: 1, value: 20, label: 'Series B'},
            {id: 2, value: 15, label: 'Series C'},
          ],},
        ]} width={400} height={200} />
            </section>
          </section>
          <section id="statsRight">
            <section className="liveDataContainer">
              <h1><u>Live data:</u></h1>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                suscipit asperiores obcaecati non ad quam, eum reprehenderit
                expedita laboriosam illo eligendi eius voluptates eveniet quia
                magni iusto consequatur repudiandae quas! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Omnis aperiam dolorum aut,
                sint quidem facere quas neque similique. Enim veniam repellendus
                nemo officiis eius itaque dicta ratione nobis reiciendis
                obcaecati!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                suscipit asperiores obcaecati non ad quam, eum reprehenderit
                expedita laboriosam illo eligendi eius voluptates eveniet quia
                magni iusto consequatur repudiandae quas! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Omnis aperiam dolorum aut,
                sint quidem facere quas neque similique. Enim veniam repellendus
                nemo officiis eius itaque dicta ratione nobis reiciendis
                obcaecati!
              </div>
              <div>286.7</div>
            </section>
            <section className="googleMapsContainer">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920450.6469856643!2d26.086604978125003!3d-25.687521799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebe0ef086c024a7%3A0x591f1db201ba8b74!2sBathopele%20platinum%20Mine!5e0!3m2!1sen!2sza!4v1729602420324!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Stats;
