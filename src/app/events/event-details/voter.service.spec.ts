import { VoterService } from './voter.service';
import { ISession } from '../shared/session.model';
import { Observable, of } from 'rxjs';

describe('VoterService', () => {
  let voterService: VoterService;
  let mockHttp: any;

  /**
   * Initializes the "VoterService" and the "MockHTTP" objects before each of the tests.
   * So it would have a brand new instance for each of the tests.
  */
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {

    it('should remove the voter from the list of voters', () => {

      // Creates the session data to be tested
      const session: any = {
        id: 6,
        voters: ['joe', 'john']
      };

      // Establishes the default return value for the mock "delete" method
      mockHttp.delete.and.returnValue(of(false));

      // Runs the tested code
      voterService.deleteVoter(3, <ISession>session, 'joe');

      // Defines our test's expectations after it ran the "deleteVoter" service method
      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('john');
    });

    it('should call http.delete with the right URL', () => {

      // Creates the session data to be tested
      const session: any = {
        id: 6,
        voters: ['joe', 'john']
      };

      // Establishes the default return value for the mock "delete" method
      mockHttp.delete.and.returnValue(of(false));

      // Runs the tested code
      voterService.deleteVoter(3, <ISession>session, 'joe');

      expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe');
    });

  });

  describe('addVoter', () => {

    it('should call http.post with the right URL', () => {

      // Creates the session data to be tested
      const session: any = {
        id: 6,
        voters: ['joe', 'john']
      };

      // Establishes the default return value for the mock "post" method
      mockHttp.post.and.returnValue(of(false));

      // Runs the tested code
      voterService.addVoter(3, <ISession>session, 'joe');

      // Defines our test's expectations after it ran the test
      expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe', {}, jasmine.any(Object));
    });
  });

});
