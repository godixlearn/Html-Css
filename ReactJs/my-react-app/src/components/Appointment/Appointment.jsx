import AppointmentImage from "../../assests/appointment-image.jpg";

export default function Appointment() {
  return (
    <section class="section" id="Appointment">
      <div class="container appointment-layout">
        <div class="appointment-image">
          <img src={AppointmentImage} alt="Appointment doctor" />
        </div>

        <div class="appointment-form">
          <h2>Make an appointment</h2>
          <form>
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Full Name" />

            <label for="email">Your Email</label>
            <input type="email" id="email" placeholder="email" />

            <label for="date">SelectDate</label>
            <input type="date" id="date" placeholder="Select Date" />

            <label for="department">Select Department</label>
            <select id="department">
              <option>General Health</option>
              <option>General Health</option>
              <option>General Health</option>
              <option>General Health</option>
            </select>

            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Phone" />

            <label for="message">Additional Message</label>
            <textarea id="message" rows="4" placeholder="Write your message">
              {" "}
            </textarea>

            <button type="submit">Make an Appointment</button>
          </form>
        </div>
      </div>
    </section>
  );
}
