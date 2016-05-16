describe('Buttons', function () {
  this.bail(true)
  this.timeout(20 * 1000)
  it('Switch to "Users" tab', function (done) {
    eTT().tab('Users').click(done);
  })
})
