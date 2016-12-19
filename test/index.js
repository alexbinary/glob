
let expect = require('chai').expect

let path = require('path')

let fsSandbox = require('alexbinary.fs-sandbox')

let glob = require('./../src/index')

fsSandbox.setRoot(__dirname)

describe('glob', function () {
  it('promise', function (done) {
    // ## Setup
    let sandbox = fsSandbox.newSync()
    sandbox.touchpSync('image/icon.png')
    sandbox.touchpSync('image/icon.jpg')
    sandbox.touchpSync('image/thumb/icon.png')
    // ## TEST
    let pattern = `${sandbox.fullpath}/**/*.png`
    glob(pattern).then((filepaths) => {
      // ## Assert
      expect(filepaths).to.be.an('array').with.lengthOf(2)
      expect(filepaths).to.contain(path.join(sandbox.fullpath, 'image/icon.png'))
      expect(filepaths).to.contain(path.join(sandbox.fullpath, 'image/thumb/icon.png'))
      expect(filepaths).to.not.contain(path.join(sandbox.fullpath, 'image/icon.jpg'))
      // ## Teardown
      fsSandbox.rmSync()
      // ## End
    }).then(() => done()).catch(done)
  })
  it('callback', function (done) {
    // ## Setup
    let sandbox = fsSandbox.newSync()
    sandbox.touchpSync('image/icon.png')
    sandbox.touchpSync('image/icon.jpg')
    sandbox.touchpSync('image/thumb/icon.png')
    // ## TEST
    let pattern = `${sandbox.fullpath}/**/*.png`
    glob(pattern, (err, filepaths) => {
      // ## Assert
      expect(err).to.be.null
      expect(filepaths).to.be.an('array').with.lengthOf(2)
      expect(filepaths).to.contain(path.join(sandbox.fullpath, 'image/icon.png'))
      expect(filepaths).to.contain(path.join(sandbox.fullpath, 'image/thumb/icon.png'))
      expect(filepaths).to.not.contain(path.join(sandbox.fullpath, 'image/icon.jpg'))
      // ## Teardown
      fsSandbox.rmSync()
      // ## End
      done()
    })
  })
  it('sync', function () {
    // ## Setup
    let sandbox = fsSandbox.newSync()
    sandbox.touchpSync('image/icon.png')
    sandbox.touchpSync('image/icon.jpg')
    sandbox.touchpSync('image/thumb/icon.png')
    // ## TEST
    let pattern = `${sandbox.fullpath}/**/*.png`
    let filepaths = glob.sync(pattern)
    // ## Assert
    expect(filepaths).to.be.an('array').with.lengthOf(2)
    expect(filepaths).to.contain(path.join(sandbox.fullpath, 'image/icon.png'))
    expect(filepaths).to.contain(path.join(sandbox.fullpath, 'image/thumb/icon.png'))
    expect(filepaths).to.not.contain(path.join(sandbox.fullpath, 'image/icon.jpg'))
    // ## Teardown
    fsSandbox.rmSync()
    // ## End
  })
  after(function () {
    fsSandbox.rmSync()
  })
})
