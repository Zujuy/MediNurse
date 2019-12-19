const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    name: String,
    lastName: String,
    photo: String,
    role: {
      type: String,
      enum: [
        'Servicio Social',
        'Asistente medica',
        'Medico',
        'Jefe enfermeros',
        'Enfermera'
      ]
    },
    phone: String,
    hospital: String,
    especiality: String,
    identification_card: String,
    enrollment: String,
    email: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });
module.exports = model('User', userSchema);
