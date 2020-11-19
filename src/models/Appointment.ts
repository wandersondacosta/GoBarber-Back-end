import { v4 as uuid } from 'uuid';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

class Appointments {
  id: string;

  provider: string;

  date: Date;

  constructor({ provider, date }: Omit<Appointments, 'id'>) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointments;
