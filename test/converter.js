const expect = require('chai').expect;
const converter = require('../app/converter')


describe('Color code converter', ()=>{
    describe('RGB to HEX', ()=>{
        it('converts colors', ()=>{
            let redHex = converter.rgbToHex(255, 0, 0);
            let greenHex = converter.rgbToHex(0, 255, 0);
            let blueHex = converter.rgbToHex(0, 0, 255);

            expect(redHex).to.equal('ff0000');
            expect(greenHex).to.equal('00ff00');
            expect(blueHex).to.equal('0000ff');
        })
    });
    describe('HEX to RGB', ()=>{
        it('converts colors', ()=>{
            let redHex = converter.hexToRGB('ff0000');
            let greenHex = converter.hexToRGB('00ff00');
            let blueHex = converter.hexToRGB('0000ff');

            expect(redHex).to.deep.equal([255, 0, 0]);
            expect(greenHex).to.deep.equal([0, 255, 0]);
            expect(blueHex).to.deep.equal([0, 0, 255]);

        })
    });
});
